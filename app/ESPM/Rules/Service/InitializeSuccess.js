export default function InitializeSuccess(context) {
  var sectionedTable = context.getPageProxy().getControl('SectionedTable');
  if (sectionedTable) {
    sectionedTable.getSections().forEach((section) => {
      if (section.getName() === "OverviewSimplePropertyCollection") {
        section.redraw();
      }
    });
  }
}