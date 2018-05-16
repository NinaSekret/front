module.exports = {
  fetchForms: {
    path: '/api/v1/forms',
    method: 'GET',
  },

  fetchForm: {
    path: '/api/v1/forms/:id',
    method: 'GET',
  },

  addForm: {
    path: '/api/v1/forms',
    method: 'POST',
  },

  updateForm: {
    path: '/api/v1/forms/:id',
    method: 'PATCH',
  },

  deleteForm: {
    path: '/api/v1/forms/:id',
    method: 'DELETE',
  },
};
