export type ColorName =
    | 'background'
    | 'black'
    | 'light'
    | 'dark'
    | 'red'
    | 'green'
    | 'darkGreen'
    | 'yellow'
    | 'blue'
    | 'purple'
    | 'darkPurple'
    | 'orange';

type ColorsDef = {[name in ColorName]: string};

const Colors: ColorsDef = {
    background: '#FCE9C4',
    black: '#000',
    light: '#F8E6B0',
    dark: '#EEB35F',
    red: '#FF3822',
    green: '#C5DF41',
    darkGreen: '#98B342',
    yellow: '#FFD024',
    blue: '#828CCA',
    purple: '#8B1263',
    darkPurple: '#753558',
    orange: '#F65D05',
};

export default Colors;
