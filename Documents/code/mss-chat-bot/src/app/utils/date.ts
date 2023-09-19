export const onKeyDownPeriod = (e: any) => {
  if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
    if (e.target.value.length === 2) {
      e.target.value += '/';
    }
    if (e.target.value.length === 5) {
      e.target.value += '/';
    }
    if (e.target.value.length >= 10) {
      e.target.value += '';
    }
  } else {
    e.target.value += '';
  }
};

export const getFullDate = (params: any) => {
  var newdate = new Date(params.utc(true)).toISOString().split('T')[0];
  return newdate;
};

export const checkOver1Year = (value: any): boolean => {
  let totalDate: number = 0;
  if (value && (value[0] || value[1])) {
    var startYear = new Date(value[0].format()).getFullYear();
    var endYear = new Date(value[1].format()).getFullYear();
    totalDate = value[0].diff(value[1], 'days');
    if (startYear === endYear && startYear % 4 === 0) {
      return totalDate > -366;
    } else {
      return totalDate > -365;
    }
  } else {
    return false;
  }
};

export const formatDateLv3 = (params: any) => {
  const today = new Date(params);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  let mmm = (today.getMonth() + 1).toString();
  let ddd = today.getDate().toString();
  if (dd < 10) ddd = '0' + dd;
  if (mm < 10) mmm = '0' + mm;

  const formattedToday = mmm + '/' + ddd + '/' + yyyy;
  return formattedToday;
};

export const formatDateLv33 = (params: any) => {
  let a = params.split('-');
  if (a.length === 3) {
    const formattedToday = a[1] + '/' + a[2] + '/' + a[0];
    return formattedToday;
  } else {
    return '';
  }
};

export const dateFormat = 'MM/DD/YYYY';
