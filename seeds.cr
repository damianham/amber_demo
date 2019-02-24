require "../config/application.cr"

User.clear
user = User.new
user.email = "admin@example.com"
user.password = "hello1234"
user.save


now = Time.utc_now

Contact.clear
contact = Contact.new firstname: "John", lastname: "Doe", email: "johndoe@example.com",
  phone: "(401) 987 7767", url: "http://www.facebook.com/johndoe", credit_card: "1234 1234 1234 1234", age: "35", gender: "male"
contact.save

contact = Contact.new firstname: "Fred", lastname: "Bloggs", email: "fredbloggs@example.com",
  phone: "(401) 987 6677", url: "http://www.facebook.com/fredbloggs", credit_card: "1234 1234 1234 5555", age: "30", gender: "male"
contact.save

Category.clear
cat = Category.new title: "Category 1", created_at: now, updated_at: now
unless cat.save
  puts "Error saving category"
  puts cat.inspect
end

cat = Category.new title: "Category 2", created_at: now, updated_at: now
unless cat.save
  puts "Error saving category"
  puts cat.inspect
end
cat = Category.new title: "blah blah blah", created_at: now, updated_at: now
unless cat.save
  puts "Error saving category"
  puts cat.inspect
end
cat = Category.new title: "Category 4", created_at: now, updated_at: now
unless cat.save
  puts "Error saving category"
  puts cat.inspect
end
cat = Category.new title: "Category 5", created_at: now, updated_at: now
unless cat.save
  puts "Error saving category"
  puts cat.inspect
end


# Category.all.each do |cat|
#   puts cat.inspect
# end
Post.clear
post = Post.new(title: "A post for all",
description: "Lorem Ipsum is a simulated content. Used in business printing or typography. It has become a standard replica of the business since the 16th century, when one printer brought a typewriter to swap letters for a sample book. Lorem Ipsum invented not just five centuries. But it was until the era turned into electronic sorting works. It remains unchanged. It was more popular in the 1960s when Letraset was released, with the text on it being Lorem Ipsum and more recently. This is when desktop publishing software like Aldus PageMaker incorporates Lorem Ipsum versions. Also included in the software.",
user_id: 1_i64,
category_id: 1_i64, created_at: now, updated_at: now)
unless post.save
  puts "Error saving post"
  puts post.inspect
end

post = Post.new(title: "This is another post",
description: "There is evidence that the facts have been confirmed for a long time. Lorem Ipsum is used to distribute the plain text, which is used instead of writing. that 'This is the content, this is the content', and it also makes it look like a normal English language. Currently, there is a package of print media software. And many Web Page Editor software using Lorem Ipsum is a default content model. And the search time with the word 'lorem ipsum' results in the search will not find the site is still in the beginning. Over the years, many versions of Lorem Ipsum have been invented. Some are willing (such as sneaky jokes).",
user_id: 1_i64,
category_id: 2_i64, created_at: now, updated_at: now)
unless post.save
  puts "Error saving post"
  puts post.inspect
end

post = Post.new(title: "Sneaky post",
description: "Over the years, many versions of Lorem Ipsum have been invented. Some are willing (such as sneaky jokes).",
user_id: 1_i64,
category_id: 2_i64, created_at: now, updated_at: now)
unless post.save
  puts "Error saving post"
  puts post.inspect
end

# Post.all.each do |p|
#   puts p.inspect
# end
Comment.clear
cmt = Comment.new(body: "this is a comment",
user_id: 1_i64,
post_id: 1_i64, created_at: now, updated_at: now)
unless cmt.save
  puts "Error saving cmt"
  puts cmt.inspect
end

cmt = Comment.new(body: "this is another comment",
user_id: 1_i64,
post_id: 2_i64, created_at: now, updated_at: now)
unless cmt.save
  puts "Error saving cmt"
  puts cmt.inspect
end

# Comment.all.each do |c|
#   puts c.inspect
# end
