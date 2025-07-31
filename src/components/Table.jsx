import React from "react";
import {
  Container,
  Table,
  TableHeader,
  TableHeaderCell,
  ParentRow,
  ChildRow,
  TableCell,
  Input,
  Button,
} from "./styles";

const TableCellComponent = ({
  column,
  row,
  isParent,
  isChild,
  parentId,
  onValueChange,
  onButtonClick,
}) => {
  const renderCellContent = () => {
    switch (column.type) {
      case "display":
        return row[column.id] || column.defaultValue || "";

      case "input":
        return (
          <Input
            type="number"
            value={row.value}
            onChange={(e) => onValueChange(parentId, row.id, e.target.value)}
            min="0"
            step="1"
            disabled={isParent}
          />
        );

      case "button":
        return (
          <Button
            onClick={() =>
              onButtonClick && onButtonClick(column.id, row.id, parentId)
            }
            title={`${column.buttonText} for ${row.label}`}
          >
            {column.buttonText}
          </Button>
        );

      default:
        return row[column.id] || "";
    }
  };

  return <TableCell $isChild={isChild}>{renderCellContent()}</TableCell>;
};

function HierarchicalTable({ data, columns, onValueChange, onButtonClick }) {
  return (
    <Container>
      <Table>
        <TableHeader>
          <tr>
            {columns.map((column) => (
              <TableHeaderCell key={column.id}>{column.header}</TableHeaderCell>
            ))}
          </tr>
        </TableHeader>
        <tbody>
          {data.rows.map((row) => (
            <React.Fragment key={row.id}>
              {/* Parent Row */}
              <ParentRow>
                {columns.map((column) => (
                  <TableCellComponent
                    key={column.id}
                    column={column}
                    row={row}
                    isParent={true}
                    isChild={false}
                    onValueChange={onValueChange}
                    onButtonClick={onButtonClick}
                  />
                ))}
              </ParentRow>

              {/* Children Rows */}
              {row.children &&
                row.children.map((child) => (
                  <ChildRow key={child.id}>
                    {columns.map((column) => (
                      <TableCellComponent
                        key={column.id}
                        column={column}
                        row={child}
                        isParent={false}
                        isChild={true}
                        parentId={row.id}
                        onValueChange={onValueChange}
                        onButtonClick={onButtonClick}
                      />
                    ))}
                  </ChildRow>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default HierarchicalTable;
