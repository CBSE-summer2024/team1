# micro frontend mart.ps project

## Overview
This project is a micro frontend-based e-commerce platform with different frameworks . The platform is divided among several teams, each responsible for different aspects of the application, all orchestrated through a central shell application.

## Split Mechanism 
We adopted the **vertical split mechanism**, where each micro frontend is responsible for a specific business domain. This approach allows us to structure our teams around these domains, with each team focusing on a distinct segment of the application, in other words each team is responsible for one or a set of related urls.

## Integration Technique
We adopted **Module Federation** as our integration tool, enabling **client-side composition** within the shell application. This tool helps to expose and share components across different applications in an easy manner. To accommodate the variety of frameworks used in our micro frontends, we build specific adapters in the ShellApp for each framework, ensuring smooth integration and communication across our ecosystem.

below example for vertical split :
![1629803740608](https://github.com/user-attachments/assets/2d79252a-cb4e-4a63-87a1-7cebd85535f2)

## Why Vertical Split 
- **Domain-Focused Teams**: Each team specializes in a specific business domain or use case, such as inspire or the decide experience .
- **Clear Boundaries**: This separation enhances modularity, making the codebase easier to manage and evolve over time.
- **Scalability**: It allows the application to scale more effectively, as teams can work independently on their domains without interfering with each other.
- **Domain-Driven Design (DDD)**: By using Vertical Split approach we apply DDD principles, traditionally used in backend architectures, which has allowed us to craft a more organized and scalable frontend ecosystem .

## Architecture Diagram
Below is a diagram illustrating the micro frontend architecture. It shows how different components interact within the shell application, and how responsibilities are divided among teams.

![Component](https://github.com/user-attachments/assets/7a7e7bb3-fd8f-41f4-93ff-22ec05a20bc8)


## Routing Mechanism
We adopt a **client-side routing mechanism** where routing is handled by the shell application using React Router. Each micro frontend registers its routes with the shell, which then dynamically loads the appropriate component based on the current URL.
  
## Teams and Components

### Shell Application With React
The shell application acts as the orchestrator for the various micro frontends. It is responsible for loading components as needed and provides shared services such as routing and authentication.

### Inspire Team With Svelte
- **Header**: Includes dynamic product categories and a carousel that highlights featured products.
- **Products Listing**: Provides a comprehensive view of products that can be filtered based on selected categories or viewed as a list of all products with a simple pagination.
- **Product Card**: Represents a product with a brief overview (not exposed, used in the Product Listing feature).

### Decide Team
- **Product Details**: Shows detailed information about a specific product, allowing users to view specifications, reviews, and pricing.
- **Preferences Options**: Manages user preferences for adding items to the cart or wishlist.
  
### User Management Team With Vue
- **User Profile**: View profile information.
- **Orders History**: Tracks and displays a history of user's orders, including status updates.

### Library for Data Fetching With TypeScript
A custom library is used across components to handle all data fetching requirements. This library abstracts the backend interactions and provides a methods for retrieving data.

### Backend System
We use Supabase as our backend solution, which offers a combination of database storage, real-time subscriptions, and built-in authentication mechanism.

### Authentication System
The platform utilizes a robust authentication system integrated with Supabase .

## Why Supabase and SQL?

### Supabase
We chose Supabase as our backend solution for its SQL capabilities, which align perfectly with our needs. Here are the key reasons:

- **SQL-Based**: Supabase leverages SQL, a powerful language for managing relational databases, which suits our need for complex data querying.
- **Comprehensive Documentation**: Supabase provides detailed, clear documentation which makes the integration process easier .
- **Active Community**: There's a large, active community around Supabase which offers support, shared knowledge, and rapid problem-solving capabilities.
- **Cost-Effectiveness**: With a generous free tier, Supabase is ideal for startups and development-phase projects, allowing for scalable growth without a huge initial expenses.

### Why SQL?
The decision to use an SQL database, which Supabase provides, was influenced by the following considerations:
- **Defined Structure**: Our data model involves well-defined entities and relationships that benefit from the structured schema of SQL databases. This structure ensures data integrity and consistency.
- **Complex Joins and Queries**: The clear relationship mapping in our project requires the use of complex joins which SQL databases handle efficiently, allowing us to retrieve combined data from multiple tables quickly and accurately.

## Possible Improvements
- **Enhanced Routing**: Implementing a better routing mechanism insted of depending on React Router DOM library.
- **Conversion to Web Native Components**: Converting micro frontend components to web-native components could improve performance and portability across different platforms .

## Getting Started
To get started with this project, clone the repository and run the start script that initializes the project.

## Resources 

To further explore the concepts and practices behind micro frontends, the following resources are recommended:

### Books
- ["Building Micro Frontends"](https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/) .
- ["Micro Frontends in Action"](https://www.manning.com/books/micro-frontends-in-action) .
### Video Resources
- [Jack Herrington's YouTube Playlist on Micro Frontends](https://www.youtube.com/watch?v=ILbRI4m2D9Y&list=PLNqp92_EXZBLr7p7hn6IYa1YPNs4yJ1t1) .
### Websites
- [Micro Frontends](https://micro-frontends.org/) .
- [Microfrontend.dev](https://microfrontend.dev/) .
