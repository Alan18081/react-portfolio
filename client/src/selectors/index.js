export const getActiveProject = projects => {
  const id = projects.get('activeProject');
  const projectsList = projects.get('list');
  if(id && projectsList) {
    return projectsList.find(project => project.get('_id') === id);
  }
};