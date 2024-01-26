import type { NextApiResponse } from 'next'
import aboutFile from '../../data/about.json';

interface AboutMe {
    paragraph1: string;
    paragraph2: string;
    data: {
        emailValue: string;
        nameValue: string;
        ageValue: string;
        fromValue: string;
    };
};


export async function GET(res: NextApiResponse) {
    try {
        const aboutData: AboutMe = aboutFile;
        res.status(200).json(aboutData);
    } catch (error) {
        console.error('Error in /api/about:', error);

        res.status(500);
    }
}

