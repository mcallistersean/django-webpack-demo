import os
from .settings import *

DEBUG = False
ALLOWED_HOSTS = ['*']
STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.ManifestStaticFilesStorage'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
