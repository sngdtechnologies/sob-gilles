import type { Locale } from "./config"
import { en, type Dictionary } from "./dictionaries/en"
import { fr } from "./dictionaries/fr"

const dictionaries: Record<Locale, Dictionary> = { en, fr }

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang]
}
