import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # 1. Navegar a la página
        await page.goto("http://localhost:3000/")

        # Esperar a que los datos se carguen y el contenedor principal sea visible
        await expect(page.locator("div.container")).to_be_visible(timeout=15000)

        # 2. Hacer clic en la pestaña "Add"
        add_tab = page.locator('div.nav-item:has(img[src*="add.svg"])')
        await expect(add_tab).to_be_visible()
        await add_tab.click()

        # 3. Verificar que el teclado en pantalla no está visible
        keyboard = page.locator(".keyboard")
        await expect(keyboard).not_to_be_visible()

        # 4. Verificar que el campo de entrada normal está visible
        input_field = page.locator("#nuevoProducto")
        await expect(input_field).to_be_visible()

        # 5. Tomar una captura de pantalla
        await page.screenshot(path="jules-scratch/verification/keyboard_disabled_verification.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())