import React, { useState, useEffect } from "react";
import type { Movie } from "../../types/movie";

interface MovieFormProps {
  model?: Movie; // Pass the full movie object if editing
  onSubmit: (movie: Omit<Movie, "id"> | Movie) => void | Promise<void>;
}

const MovieForm: React.FC<MovieFormProps> = ({ model, onSubmit }) => {
  const [formData, setFormData] = useState<Movie>({
  id: model?.id || 0, // id=0 just for TS, we remove it on create
  title: model?.title || "",
  type: model?.type || "MOVIE",
  director: model?.director || "",
  budget: model?.budget || "",
  location: model?.location || "",
  duration: model?.duration || "",
  yearTime: model?.yearTime || "",
  description: model?.description || "",
  posterUrl: model?.posterUrl || "",
});

  useEffect(() => {
    if (model) setFormData(model);
  }, [model]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.id && formData.id > 0) {
    // Update -> pass full Movie
    onSubmit(formData);
  } else {
    // Create -> remove id before submitting
    const { id, ...dataWithoutId } = formData;
    onSubmit(dataWithoutId);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        {model ? "Update Movie" : "Add New Movie"}
      </h2>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="w-full border border-gray-300 p-2 rounded"
      />

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded"
      >
        <option value="MOVIE">Movie</option>
        <option value="TV_SHOW">TV Show</option>
        <option value="OTHER">Other</option>
      </select>

      <input
        type="text"
        name="director"
        value={formData.director}
        onChange={handleChange}
        placeholder="Director"
        required
        className="w-full border border-gray-300 p-2 rounded"
      />

      <input
        type="text"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        placeholder="Budget"
        className="w-full border border-gray-300 p-2 rounded"
      />

      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="w-full border border-gray-300 p-2 rounded"
      />

      <input
        type="text"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Duration"
        className="w-full border border-gray-300 p-2 rounded"
      />

      <input
        type="text"
        name="yearTime"
        value={formData.yearTime}
        onChange={handleChange}
        placeholder="Year"
        className="w-full border border-gray-300 p-2 rounded"
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        rows={3}
        className="w-full border border-gray-300 p-2 rounded"
      />

      <input
        type="text"
        name="posterUrl"
        value={formData.posterUrl}
        onChange={handleChange}
        placeholder="Poster URL"
        className="w-full border border-gray-300 p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {model ? "Update Movie" : "Create Movie"}
      </button>
    </form>
  );
};

export default MovieForm;
