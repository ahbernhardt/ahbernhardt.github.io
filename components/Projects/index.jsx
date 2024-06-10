import { useState } from 'react';
import Titles from './Titles.jsx';
import Descriptions from './descriptions';
import {projects} from './data'


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div id="projects" className="w-full relative">
            <Titles data={projects} setSelectedProject={setSelectedProject}/>
            <Descriptions data={projects} selectedProject={selectedProject}/>
        </div>
    )
}