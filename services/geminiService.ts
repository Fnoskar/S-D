import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateEngineeringAdvice = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "Serviciul de asistență AI este indisponibil momentan (API Key lipsă).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Ești un asistent virtual expert în inginerie civilă, structuri de rezistență și arhitectură pentru firma "S&D Design Project" din Constanța, România. Administratorul firmei este Denis Bucatica.
        
        Rolul tău:
        1. Să răspunzi la întrebări despre proiectare structurală, design arhitectural, certificate de urbanism și autorizații de construire.
        2. Să promovezi serviciile integrate ale firmei (arhitectură + structură).
        3. Să fii profesionist, concis și tehnic, dar cu un ton creativ și accesibil.
        
        Dacă utilizatorul cere o ofertă concretă de preț, îndrumă-l politicos către pagina de contact sau numărul de telefon al administratorului Denis Bucatica.
        Nu inventa proiecte specifice pe care nu le cunoști.`,
        temperature: 0.7,
      },
    });

    return response.text || "Nu am putut genera un răspuns. Te rugăm să încerci din nou.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "A intervenit o eroare în comunicarea cu serverul de asistență.";
  }
};