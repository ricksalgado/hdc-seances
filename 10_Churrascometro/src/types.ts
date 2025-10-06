export type Alimentos = 'carne' | 'linguica' | 'frango' | 'paoAlho';

export const quantidadePessoas: Record<Alimentos, number> = {
    carne: 500,
    linguica: 200,
    frango: 250,
    paoAlho: 100
};

export const nomesAlimentos: Record<string,string> = {
    carne: "Beef",
    linguica: "Linguiça / Sausage",
    frango: "Chicken",
    paoAlho: "Garlic Bread"
};

