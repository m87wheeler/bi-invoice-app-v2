export const eventFilterReducer = (initialState, action) => {
  console.log(action.type, initialState);

  const order = { high: 3, regular: 2, low: 1 };

  switch (action.type) {
    case "date_closest":
      let date_closest = initialState.sort((a, b) => {
        let date_1 = new Date(a.date.start);
        let date_2 = new Date(b.date.start);
        return date_1 - date_2;
      });
      console.log(date_closest);
      return date_closest;

    case "date_furthest":
      let date_furthest = initialState.sort((a, b) => {
        let date_1 = new Date(a.date.start);
        let date_2 = new Date(b.date.start);
        return date_2 - date_1;
      });
      console.log(date_furthest);
      return date_furthest;

    case "priority_hl":
      let priority_hl = initialState.sort(
        (a, b) => order[a.priority] - order[b.priority]
      );
      console.log(priority_hl);
      return priority_hl;

    case "priority_lh":
      let priority_lh = initialState.sort(
        (a, b) => order[b.priority] - order[a.priority]
      );
      console.log(priority_lh);
      return priority_lh;

    case "category_az":
      let category_az = initialState.sort((a, b) =>
        a.category.toLowerCase() < b.category.toLowerCase() ? -1 : +1
      );
      console.log(category_az);
      return category_az;

    case "category_za":
      let category_za = initialState.sort((a, b) =>
        a.category.toLowerCase() > b.category.toLowerCase() ? -1 : +1
      );
      console.log(category_za);
      return category_za;

    case "assigned_me":
      let assigned_me = initialState.filter(
        (event) => event.assigned_to === action.user
      );
      console.log(assigned_me);
      return assigned_me;

    case "author_me":
      let author_me = initialState.filter(
        (event) => event.creation.author === action.user
      );
      console.log(author_me);
      return author_me;

    case "filter_complete":
      let filter_complete = initialState.filter((event) => !event.complete);
      console.log(filter_complete);
      return filter_complete;

    default:
      return initialState;
  }
};
