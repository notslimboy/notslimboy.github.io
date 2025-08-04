/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import { baseURL } from '@/app/resources'

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
            },
        ],
        sitemap: `${baseURL}/sitemap.xml`,
    }
}