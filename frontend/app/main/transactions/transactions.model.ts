
export interface Transaction {
    type: string;
    class: string;
    merchant: string;
    point: number;
    curr: number;
    country: string;
    date: Date;
    description: string;
    taxfree: boolean;
    utu: boolean;
    save_point: number;
}
