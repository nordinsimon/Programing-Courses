class Course {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    logoUrl,
    header,
    description,
    content,
    moments
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.backgroundUrl = imageUrl;
    this.logoUrl = logoUrl;
    this.header = header;
    this.description = description;
    this.content = content;
    this.moments = moments;
  }
}

export default Course;
