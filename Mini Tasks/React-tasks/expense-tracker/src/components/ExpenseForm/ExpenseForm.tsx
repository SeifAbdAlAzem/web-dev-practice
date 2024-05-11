import categories from "../categories";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import errorMap from "zod/lib/locales/en";

interface ExpenseFormProps {
  onSubmit: (expenses: expenseFormData) => void;
}

const Form = styled.form`
  background-color: #f5f5f5;
  width: 50%;
  margin: 20px auto 0;
  border-radius: 12px;
  padding: 10px;
`;

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 charachters" })
    .max(18),
  amount: z
    .number({ invalid_type_error: "Amount Field is Required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category Field Required" }),
  }),
});

type expenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<expenseFormData>({ resolver: zodResolver(schema) });

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          id="category"
          aria-label="Categories"
          {...register("category")}
        >
          <option value=""></option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Add Expense
      </button>
    </Form>
  );
};

export default ExpenseForm;
