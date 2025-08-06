"use client";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechVision Solutions",
      image:
        "https://readdy.ai/api/search-image?query=professional%20business%20woman%20smiling%20confident%20portrait%20headshot%20corporate%20executive%20modern%20office%20background%20clean%20minimalist%20style&width=80&height=80&seq=review1&orientation=squarish",
      rating: 5,
      review:
        "Arif's expertise in Google Analytics and GTM setup transformed our data tracking capabilities. His detailed approach and clear explanations made complex analytics simple to understand. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "E-commerce Plus",
      image:
        "https://readdy.ai/api/search-image?query=professional%20businessman%20confident%20smile%20portrait%20headshot%20corporate%20manager%20modern%20office%20background%20clean%20minimalist%20style&width=80&height=80&seq=review2&orientation=squarish",
      rating: 5,
      review:
        "Working with Arif on our Google Ads campaigns was exceptional. He increased our ROAS by 300% and significantly reduced our cost per acquisition. His strategic approach is unmatched.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "Fashion Forward",
      image:
        "https://readdy.ai/api/search-image?query=professional%20business%20woman%20confident%20portrait%20headshot%20corporate%20female%20executive%20modern%20office%20background%20clean%20minimalist%20style&width=80&height=80&seq=review3&orientation=squarish",
      rating: 5,
      review:
        "Arif's Facebook Pixel integration and campaign optimization doubled our online sales. His attention to detail and data-driven strategies delivered results beyond our expectations.",
    },
    {
      id: 4,
      name: "David Park",
      company: "Local Biz Solutions",
      image:
        "https://readdy.ai/api/search-image?query=professional%20businessman%20friendly%20smile%20portrait%20headshot%20corporate%20entrepreneur%20modern%20office%20background%20clean%20minimalist%20style&width=80&height=80&seq=review4&orientation=squarish",
      rating: 5,
      review:
        "The training sessions with Arif were incredibly valuable. He taught us how to use GTM effectively and set up proper tracking for our campaigns. Best investment we've made!",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "Growth Marketing Co",
      image:
        "https://readdy.ai/api/search-image?query=professional%20business%20woman%20warm%20smile%20portrait%20headshot%20corporate%20marketing%20executive%20modern%20office%20background%20clean%20minimalist%20style&width=80&height=80&seq=review5&orientation=squarish",
      rating: 5,
      review:
        "Arif's comprehensive approach to web analytics helped us understand our customers better. His reporting and insights directly contributed to our 40% revenue increase.",
    },
    {
      id: 6,
      name: "James Wilson",
      company: "Digital Dynamics",
      image:
        "https://readdy.ai/api/search-image?query=professional%20businessman%20confident%20portrait%20headshot%20corporate%20director%20modern%20office%20background%20clean%20minimalist%20style%20business%20suit&width=80&height=80&seq=review6&orientation=squarish",
      rating: 5,
      review:
        "Outstanding service! Arif set up our entire tracking infrastructure from scratch. His expertise in GA4 and Facebook CAPI implementation is top-notch. Couldn't be happier!",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`ri-star-${
          index < rating ? "fill" : "line"
        } text-yellow-400`}
      ></i>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Reviews
          </h2>
          <h3 className="text-2xl text-blue-600 mb-6">What My Clients Say</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my satisfied clients
            have to say about working with me on their digital marketing and
            analytics projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {review.name}
                  </h4>
                  <p className="text-blue-600 font-medium">{review.company}</p>
                </div>
              </div>

              <div className="flex mb-4 space-x-1">
                {renderStars(review.rating)}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{review.review}"
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <i className="ri-double-quotes-l text-blue-400 text-2xl"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-blue-50 px-12 py-8 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
