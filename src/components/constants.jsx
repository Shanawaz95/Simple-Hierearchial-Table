/**
 * REUSABLE TABLE CONFIGURATION
 *
 * This file contains the configuration for creating reusable hierarchical tables.
 * You can easily create different table layouts by modifying the column configuration.
 *
 * Column Types Supported:
 * - 'label': Text display with optional child indentation
 * - 'display': Simple text/number display
 * - 'input': Input field for child rows, Add button for parent rows
 * - 'button': Clickable button with custom variants
 *
 * Example of creating a different table:
 * const CUSTOM_COLUMNS = [
 *   { id: 'name', header: 'Name', type: 'label', align: 'left' },
 *   { id: 'amount', header: 'Amount', type: 'display', align: 'right' },
 *   { id: 'actions', header: 'Actions', type: 'button', buttonText: 'Edit', buttonVariant: 'edit' }
 * ];
 */

// Column configuration for the hierarchical table
const TABLE_COLUMNS = [
  {
    id: "label",
    header: "Label",
    type: "display",
  },
  {
    id: "value",
    header: "Value",
    type: "display",
  },
  {
    id: "input",
    header: "Input",
    type: "input",
  },
  {
    id: "allocationPercent",
    header: "Allocation %",
    type: "button",
    buttonText: "Button 1",
  },
  {
    id: "allocationValue",
    header: "Allocation Val",
    type: "button",
    buttonText: "Button 2",
  },
  {
    id: "variance",
    header: "Variance %",
    type: "display",
    defaultValue: "0%",
  },
];

const INITIAL_TABLE_DATA = {
  rows: [
    {
      id: "electronics",
      label: "Electronics",
      value: 1500,
      variance: 0,
      children: [
        {
          id: "phones",
          label: "Phones",
          value: 800,
          variance: 0,
        },
        {
          id: "laptops",
          label: "Laptops",
          value: 700,
          variance: 0,
        },
      ],
    },
    {
      id: "furniture",
      label: "Furniture",
      value: 1000,
      variance: 0,
      children: [
        {
          id: "tables",
          label: "Tables",
          value: 300,
          variance: 0,
        },
        {
          id: "chairs",
          label: "Chairs",
          value: 700,
          variance: 0,
        },
      ],
    },
  ],
};

export { INITIAL_TABLE_DATA, TABLE_COLUMNS };
