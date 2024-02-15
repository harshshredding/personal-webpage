import React from "react";

export interface ProjectData {
    heading: string;
    summary: React.ReactNode;
    github_link: string;
    image_path: string;
    tech_used: string[];
}

export const project_composer: ProjectData = {
    heading: 'Convolutional Composer Classification',
    summary: (
        <p>
            Built ML model to identify the composer of a piece of music from its music-score. Our models beat the
            start-of-the-art at that time. Check out <a href="https://arxiv.org/abs/1911.11737" className="text-blue-400">our paper</a>, which we published at ISMIR.
        </p>
    ),
    github_link: 'https://github.com/harshshredding/Convolutional-Composer-Classification',
    image_path: '/composer.png',
    tech_used: ['Python', 'C++', 'PyTorch']
}