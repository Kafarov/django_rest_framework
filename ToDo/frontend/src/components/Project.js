const ProjectItem = ({ project }) => {
    return (
        <tr>
            
            <td>{project.name}</td>
            <td>{project.body}</td>
            <td>{project.git_link}</td>
            <td>{project.users}</td>
        </tr>
    )
}


const ProjectList = ({ project }) => {
    return (
        <div className='grid content'>
            <table className="table">
                <th>Project name</th>
                <th>Body</th>
                <th>GIT Link</th>
                <th className="lastTh">Users</th>
                {project.map((project_) => <ProjectItem project={project_} />)}
            </table>
        </div>
    )
}

export default ProjectList