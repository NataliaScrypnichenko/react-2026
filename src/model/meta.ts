import type {metaCta} from "./metaCta.ts";

export interface meta {
    powered_by: string;
    docs_url: string;
    upgrade_url: string;
    example_url: string;
    variant: string;
    message: string;
    cta: metaCta;
    context: string;
}
