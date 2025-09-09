
export class Formatter {

    static formatDate(value: string): string {
        const date = new Date(value);

        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        });
    }

}