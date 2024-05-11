import categories from "../categories";

interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
  return (
    <>
      <select
        className="form-select my-3 w-50 mx-auto"
        aria-label="Categories"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
