import text from './text';
import table from './table';

type T = typeof text;

export function getTypeReponse(type: string): T {
    switch (type) {
        case 'text':
            return text;
        case 'json':
            return table;
        default:
            return text;
    }
}