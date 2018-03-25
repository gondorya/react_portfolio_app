export default (photos, { title, sortBy, startDate, endDate }) => {
  return photos.filter((photo) => {
      const startDateMatch = typeof startDate !== 'number' || photo.createdAt >=startDate;
      const endDateMatch = typeof endDate !== 'number' || photo.createdAt <= endDate;
      const titleMatch = photo.title.toLowerCase().includes(title.toLowerCase());

      return startDateMatch && endDateMatch && titleMatch;
  }).sort((a, b) => {
      if (sortBy === 'date') {
          return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'title') {
          return (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLocaleLowerCase()) ? -1 : 0);
      }
  });   
};
