/**
 * Funciones de utilidad para manipulación de texto
 */

/**
 * Genera un ID aleatorio
 * @returns String con ID aleatorio
 */
export const generateID = (): string => 
  Math.random().toString(36).slice(2);

/**
 * Parsea emojis y los encapsula en un span con la clase emoji
 * @param text Texto a parsear
 * @returns Texto con emojis encapsulados en spans
 */
export const parseEmoji = (text: string): string => {
  // eslint-disable-next-line
  const emojiRegex = /([\u{203C}\u{2049}\u{20E3}\u{2122}\u{2139}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{24C2}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2600}-\u{2601}\u{260E}\u{2611}\u{2614}-\u{2615}\u{261D}\u{263A}\u{2648}-\u{2653}\u{2660}\u{2663}\u{2665}-\u{2666}\u{2668}\u{267B}\u{267F}\u{2693}\u{26A0}-\u{26A1}\u{26AA}-\u{26AB}\u{26BD}-\u{26BE}\u{26C4}-\u{26C5}\u{26CE}\u{26D4}\u{26EA}\u{26F2}-\u{26F3}\u{26F5}\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}-\u{270C}\u{270F}\u{2712}\u{2714}\u{2716}\u{2728}\u{2733}-\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}-\u{2755}\u{2757}\u{2764}\u{2795}-\u{2797}\u{27A1}\u{27B0}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F004}\u{1F0CF}\u{1F201}-\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F250}-\u{1F251}\u{1F300}-\u{1F320}\u{1F330}-\u{1F335}\u{1F337}-\u{1F37C}\u{1F380}-\u{1F393}\u{1F3A0}-\u{1F3C4}\u{1F3C6}-\u{1F3CA}\u{1F3E0}-\u{1F3F0}\u{1F400}-\u{1F43E}\u{1F440}\u{1F442}-\u{1F4F7}\u{1F4F9}-\u{1F4FC}\u{1F500}-\u{1F507}\u{1F509}-\u{1F53D}\u{1F550}-\u{1F567}\u{1F5FB}-\u{1F640}\u{1F645}-\u{1F64F}\u{1F680}-\u{1F68A}\u{1FA00}-\u{1FAFF}])/gu;
  // eslint-disable-next-line
  const regionalIndicatorRegex = /([\uD83C][\uDDE6-\uDDFF]){2}/g;
  return text.replace(emojiRegex, '<span class="emoji">$1</span>').replace(regionalIndicatorRegex, '<span class="emoji">$&</span>');
};

/**
 * Normaliza un texto eliminando acentos y convirtiéndolo a minúsculas
 * para facilitar búsquedas insensibles a acentos
 * @param text Texto a normalizar
 * @returns Texto normalizado sin acentos y en minúsculas
 */
export const normalizeText = (text: string): string => {
  if (!text) return '';
  
  // Convertir a minúsculas y normalizar para separar los caracteres base de sus marcas diacríticas
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Eliminar todas las marcas diacríticas (acentos, diéresis, etc.)
};
