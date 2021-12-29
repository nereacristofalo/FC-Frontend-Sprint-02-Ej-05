import { getTableData } from './seed';

export const INITIAL_DATA = getTableData(10);

export const INITIAL_SORT = {
  fullname: 'ASC',
  city: 'ASC',
  country: 'ASC',
  email: 'ASC',
  skills: 'ASC',
};

export const orderAscending = (prop) => {
  const sortedList = [...INITIAL_DATA];
  sortedList.sort((a, b) => {
    let fa = a[prop].toLowerCase(),
      fb = b[prop].toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  return sortedList;
};

export const orderDescending = (prop) => {
  const sortedList = [...INITIAL_DATA];
  sortedList.sort((a, b) => {
    let fa = a[prop].toLowerCase(),
      fb = b[prop].toLowerCase();

    if (fa > fb) {
      return -1;
    }
    if (fa < fb) {
      return 1;
    }
    return 0;
  });
  return sortedList;
};

export // ORDENA POR CANTIDAD DE ETIQUETAS
const orderSkills = (sortOrder) => {
  let sortedData = [...INITIAL_DATA];

  switch (sortOrder.skills) {
    case 'ASC':
      sortedData.sort((a, b) => {
        let fa = a.skills.length,
          fb = b.skills.length;

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      sortOrder = {
        fullname: 'ASC',
        city: 'ASC',
        country: 'ASC',
        email: 'ASC',
        skills: 'ASC',
      };
      sortOrder.skills = 'DESC';
      break;
    case 'DESC':
      sortedData.sort((a, b) => {
        let fa = a.skills.length,
          fb = b.skills.length;

        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
      sortOrder.skills = 'none';
      break;
    default:
      sortOrder.skills = 'ASC';
      break;
  }
  return { sortedData, sortOrder };
};
