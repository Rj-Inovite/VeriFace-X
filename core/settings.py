import os
from pathlib import Path

# 1. BASE DIRECTORY SETUP
# The root of your project: D:\Ruchi\React\Face-scan\Face-scan-python-Ai-automated-prj
BASE_DIR = Path(__file__).resolve().parent.parent

# 2. SECURITY CONFIGURATION
# WARNING: Keep this secret in production!
SECRET_KEY = 'django-insecure-^(g5p33j8fh55rwmnm!_jsm!_xce#7@a3-a%o184vujoi15nk2'

# DEBUG must be True to see Error Reports and to serve Media Files locally
DEBUG = True

# Allows connections from local and network IPs
ALLOWED_HOSTS = ['*'] 

# 3. APPLICATION DEFINITION
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # Third Party Modules
    'rest_framework',       # Powering the Neural Audit API
    'corsheaders',          # The 'Diplomat' that allows React to talk to Django
    
    # Internal Project Apps
    'api',                  # Your Forensic Logic and Models
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',      # MUST stay at the very top for CORS to work
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',  # Protection against cross-site forged requests
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.media', # Essential for forensic image display
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

# 4. DATABASE (Using SQLite for local forensic ledgering)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# 5. REST FRAMEWORK SETTINGS
# This defines how the API behaves globally
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny', # Allows React to access endpoints without login
    ],
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.MultiPartParser', # Critical for File Uploads
        'rest_framework.parsers.FormParser',
    ]
}

# 6. CORS CONFIGURATION (The Bridge to React)
# Since your React is on 5176, we allow it explicitly
CORS_ALLOW_ALL_ORIGINS = True 

# Allow specific headers required for file uploads
CORS_ALLOW_HEADERS = [
    "accept",
    "authorization",
    "content-type",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
]

# 7. STATIC AND MEDIA FILES
STATIC_URL = 'static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

# MEDIA: This is where 'Neural Audit' samples are stored
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# 8. PASSWORD VALIDATION
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# 9. INTERNATIONALIZATION
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# 10. DEFAULT PRIMARY KEY FIELD
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'