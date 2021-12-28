import slugify from "slugify";

const slug = (member) => slugify(member.name).toLowerCase();

export default slug;
