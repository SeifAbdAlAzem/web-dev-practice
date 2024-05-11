import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Grid,
  GridItem,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";

// Props interface for the Create component
interface Props {
  // Callback function to handle form submission
  onSubmit: (data: FormData) => void;
}

// Styled components for custom styling
const ErrorMsg = styled.p`
  color: red;
`;
const ImagePreview = styled.img`
  margin-top: 10px;
  max-width: 200px;
`;

// Define the form schema using Zod
const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(12),
  author: z
    .string()
    .min(3, { message: "Author Name must be at least 3 characters" })
    .max(12),
  description: z
    .string()
    .min(25, { message: "Description must be at least 25 characters" })
    .max(40),
  image: z.string({ message: "Please Select an image" }),
  priority: z.boolean(),
});

// Define the type for form data based on the schema
type FormData = z.infer<typeof schema>;

// Create component for creating a new task
const Create = ({ onSubmit }: Props) => {
  // Form management using react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // State for storing the image preview
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Function to handle file change for image upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setImagePreview(imageDataUrl);
        setValue("image", file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  // Render the component
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
        setImagePreview(null);
      })}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap="40px">
        <GridItem>
          <FormControl mb="40px" isRequired>
            <FormLabel htmlFor="title">Task Title</FormLabel>
            <Input
              id="title"
              {...register("title")}
              type="text"
              name="title"
              aria-invalid={errors.title ? "true" : "false"}
              aria-describedby={errors.title ? "title-error" : undefined}
            />
            {errors.title ? (
              <ErrorMsg id="title-error">{errors.title.message}</ErrorMsg>
            ) : (
              <FormHelperText>Provide a title for the Task.</FormHelperText>
            )}
          </FormControl>

          <FormControl mb="40px" isRequired>
            <FormLabel htmlFor="description">Task Description</FormLabel>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Enter a detailed description for your task..."
              name="description"
              resize="none"
              aria-invalid={errors.description ? "true" : "false"}
              aria-describedby={
                errors.description ? "description-error" : undefined
              }
            />
            {errors.description && (
              <ErrorMsg id="description-error">
                {errors.description.message}
              </ErrorMsg>
            )}
          </FormControl>

          <FormControl mb="28px" isRequired>
            <FormLabel htmlFor="author">Task Author</FormLabel>
            <Input
              id="author"
              {...register("author")}
              type="text"
              name="author"
              aria-invalid={errors.author ? "true" : "false"}
              aria-describedby={errors.author ? "author-error" : undefined}
            />
            {errors.author && (
              <ErrorMsg id="author-error">{errors.author.message}</ErrorMsg>
            )}
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl mb="40px" isRequired>
            <FormLabel htmlFor="image">Upload Image</FormLabel>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              name="image"
              aria-invalid={errors.image ? "true" : "false"}
              aria-describedby={errors.image ? "image-error" : undefined}
            />
            {imagePreview && (
              <ImagePreview src={imagePreview} alt="Uploaded Preview" />
            )}
            {errors.image && (
              <ErrorMsg id="image-error">{errors.image.message}</ErrorMsg>
            )}
          </FormControl>

          <FormControl display="flex" alignItems="center" mb="40px">
            <Checkbox
              {...register("priority")}
              name="isPriority"
              colorScheme="purple"
              size="lg"
              defaultChecked={false}
              onChange={(event) => {
                const isChecked = event.target.checked;
                setValue("priority", isChecked);
              }}
              aria-label="Make a priority task"
            />
            <FormLabel mb="0" ml="10px">
              Make a priority task
            </FormLabel>
          </FormControl>
        </GridItem>
      </Grid>

      <Button type="submit" colorScheme="purple">
        Submit
      </Button>
    </form>
  );
};

export default Create;
