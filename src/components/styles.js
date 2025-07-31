import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const TableHeader = styled.thead`
  background-color: #4a90e2;
  color: white;
`

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 1.1rem;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
  
  &:hover {
    background-color: #e3f2fd;
  }
  
  transition: background-color 0.2s ease;
`

const ParentRow = styled(TableRow)`
  background-color: #e8f5e8;
  font-weight: 600;
  
  &:hover {
    background-color: #d4edda;
  }
`

const ChildRow = styled(TableRow)`
  background-color: #fff;
  
  &:hover {
    background-color: #f0f8ff;
  }
`

const TableCell = styled.td`
  padding: 0.75rem 1rem;
  ${props => props.$isChild && `
    padding-left: 2rem;
  `}
  border-bottom: 1px solid #e0e0e0;
`

const LabelCell = styled(TableCell)`
  font-weight: ${props => props.isParent ? '600' : '400'};
  padding-left: ${props => props.isChild ? '2rem' : '1rem'};
  color: ${props => props.isParent ? '#2c5530' : '#333'};
`

const ValueCell = styled(TableCell)`
  min-width: 120px;
  text-align: right;
  font-weight: 600;
`

const InputCell = styled(TableCell)`
  min-width: 100px;
  text-align: center;
`

const AllocationPercentCell = styled(TableCell)`
  min-width: 120px;
  text-align: center;
`

const AllocationValueCell = styled(TableCell)`
  min-width: 120px;
  text-align: center;
`

const VarianceCell = styled(TableCell)`
  min-width: 100px;
  text-align: center;
  font-weight: 600;
  color: #666;
`

const Input = styled.input`
  width: 80px;
  padding: 0.4rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
`

const Button = styled.button`
  padding: 0.3rem 0.6rem;
  margin: 0 0.1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  ${props => props.variant === 'add' && `
    background-color: #28a745;
    color: white;
    
    &:hover {
      background-color: #218838;
    }
  `}
  
  ${props => props.variant === 'delete' && `
    background-color: #dc3545;
    color: white;
    
    &:hover {
      background-color: #c82333;
    }
  `}
  
  ${props => props.variant === 'button1' && `
    background-color: #007bff;
    color: white;
    
    &:hover {
      background-color: #0056b3;
    }
  `}
  
  ${props => props.variant === 'button2' && `
    background-color: #6c757d;
    color: white;
    
    &:hover {
      background-color: #545b62;
    }
  `}
`

const CalculatedValue = styled.span`
  font-weight: 600;
  color: #2c5530;
  background-color: #e8f5e8;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  margin-right: 0.5rem;
`

export { 
  Container,
  Table, 
  TableHeader, 
  TableHeaderCell, 
  TableRow, 
  ParentRow, 
  ChildRow, 
  TableCell, 
  LabelCell, 
  ValueCell, 
  InputCell,
  AllocationPercentCell,
  AllocationValueCell,
  VarianceCell,
  Input, 
  Button, 
  CalculatedValue 
};