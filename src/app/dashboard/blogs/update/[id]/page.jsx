import UpdateBlog from "@/app/dashboard/components/Update";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { blog } = await getTopicById(id);
  const { title, image, date, content } = blog;

  return (
    <UpdateBlog
      id={id}
      title={title}
      image={image}
      date={date}
      content={content}
    />
  );
}
