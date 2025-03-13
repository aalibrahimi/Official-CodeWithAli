declare module 'resend' {
    export class Resend {
        constructor(apiKey: string);
        emails: {
            send(options: {
                from: string;
                to: string | string[];
                subject: string;
                react: React.ReactElement;
                text?: string;
                html?: string;
            }): Promise<{
                data: any;
                error: any;
            }>;
        };
    }
}