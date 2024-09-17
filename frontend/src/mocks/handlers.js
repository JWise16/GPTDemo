import { http, HttpResponse } from 'msw';

export const handlers = [
    // Mock /api/questions endpoint
    http.get('/api/questions', () => {
        return HttpResponse.json([
            "What is computational biology?",
            "Explain the central dogma of molecular biology.",
            "Describe the significance of genome sequencing."
        ]);
    }),
    
    // Mock /api/upload endpoint
    http.post('/api/upload', async ({ request }) => {
        // Let's assume we're dealing with a text file upload for simplicity
        const fileContent = await request.text();
        // Simulate file processing...
        return HttpResponse.json({ message: "File uploaded successfully", content: fileContent });
    }),
];
