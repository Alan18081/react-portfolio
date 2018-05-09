export const getActiveProject = projects => {
  const id = projects.get('activeProject');
  const projectsList = projects.get('list');
  if(id && projectsList.size > 0) {
    return projectsList.find(project => project.get('_id') === id);
  }
};