import { FaTrash } from 'react-icons/fa';
import Button from '../../ui/Button';

export type ItemRemoveProps = {
  onRemove: Function;
};

const ItemRemove = ({ onRemove }: ItemRemoveProps) => (
  <Button variant="dangerAction" onClick={() => onRemove()} className="group">
    <FaTrash className="group-hover:animate-ping" />
  </Button>
);

export default ItemRemove;
