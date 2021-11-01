$(function () {
  $("#gridContainer").dxDataGrid({
    dataSource: {
      store: {
        type: "odata",
        url: "https://api.tvmaze.com/shows?page=1",
        key: "id",
      },
    },
    pager: {
      showPageSizeSelector: true,
      allowedPageSizes: [10, 25, 50, 100],
    },
    remoteOperations: false,
    searchPanel: {
      visible: true,
      highlightCaseSensitive: true,
    },
    allowColumnReordering: false,
    rowAlternationEnabled: true,
    showBorders: true,
    columns: [
      {
        dataField: "name",
      },
      {
        dataField: "genres",
      },
      {
        dataField: "language",
      },
      {
        dataField: "rating.average",
      },
      {
        dataField: "network.name",
      },
      {
        dataField: "image.original",
        cellTemplate: imageTemplate,
        caption: "Image",
      },
    ],
  });
});

var imageTemplate = function (container, options) {
  $(`<img src="${options.value}" style="height:50px" />`).appendTo(container);
};
