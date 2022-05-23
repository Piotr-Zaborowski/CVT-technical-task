# CVT-technical-task

This is the app that resembles a blog. It consists of backend and frontend.

BACKEND:

Backend is developed using:
-python
-django
-DRF
-PostgreSQL

The python app requires following modules:
-django
-django-cors-headers
-djangorestframework
-psycopg2-binary

To ensure security CORS is only allowed for the frontend running on "http://localhost:3000".
To edit this setting adjust CORS_ALLOWED_ORIGINS in settings.py file located in /backend/mysite/mysite/settings.py

To run the app you need to install the modules and run the PostgreSQL database.
The default settings connect to the DB locally on port 55000.

The app requires DB to be created, the default DB name is cvtdb.

The database can be further configures inside the settings.py file located in /backend/mysite/mysite/settings.py

We need to make migrations to the DB, so we run "python manage.py migrate" in /backend/mysite folder.

To run the application run command "python manage.py runserver" in /backend/mysite folder.

FRONTEND:

Frontend is developed using:
-React
-MUI5
-Axios

We need to install npm in order to run the project.

Start the project enter "npm start" in /frontend/cvt-frontend

The base URL for API calls can be adjusted in /frontend/cvt-frontend/src/App.tsx

Thing to improve:
-counting views of post in backend is not done in the best way (with many API calls some of them may be not counted
-displaying single post is done synchronously, using dangerouslySetInnerHTML
-tests should be added
-authentication and permissions could be added
-design could be more responsive (especially modals)
-swagger API could be created


