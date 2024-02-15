import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {ProjectData} from './projects_util';


function Tag({ text }: {text: string}) {
    return (
        <button className="bg-gray-700 text-white text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full">
            {text}
        </button>
    );
}

export function Card(props: ProjectData) {
    return (
        <div className="flex flex-row pt-4">
            <div className="flex-none w-40 h-40 relative">
                <img src={props.image_path} className="absolute inset-0 w-full h-full object-cover rounded" />
            </div>
            <div className="flex flex-col px-4">
                <h2 className="font-bold">Convolutional Composer Classification</h2>
                <p>
                    Built ML model to identify the composer of a piece of music from its music-score. Our models beat the
                    start-of-the-art at that time. Check out <a href="https://arxiv.org/abs/1911.11737" className="text-blue-400">our paper</a>, which we published at ISMIR.
                </p>
                <div className='flex items-center'>
                    <div>
                        <FontAwesomeIcon icon={faGithub} className='w-5 h-7 mr-2 mb-1'></FontAwesomeIcon>
                    </div>
                    <div>
                        <a href='https://github.com/harshshredding/Convolutional-Composer-Classification' className='text-blue-300'>
                            view code
                        </a>
                    </div>
                </div>
                <div className="flex-grow"></div>
                <div className="flex flex-wrap items-end">
                    <Tag text="Python"></Tag>
                    <Tag text="C++"></Tag>
                    <Tag text="PyTorch"></Tag>
                </div>
            </div>
        </div>
    );
};