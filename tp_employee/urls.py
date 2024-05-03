from django.urls import path,include
from tp_employee import views
from rest_framework.routers import DefaultRouter
# from .views import UploadViewSet


# router = DefaultRouter()
# router.register('files', UploadViewSet, basename='files')

urlpatterns = [
    path('tp_employee/', views.EmployeeList.as_view()),
    path('tp_employee/<int:pk>/', views.EmployeeDetail.as_view()),
     path('tp_employee/searchall',views.EmployeeListView.as_view()),
    path('tp_employee/searchbyName',views.EmployeeListViewName.as_view()),
     path('tp_employee/searchbyId',views.EmployeeListViewID.as_view()),
      path('tp_employee/searchbyDesg',views.EmployeeListViewDesg.as_view()),
    path('tp_employee/upload/', views.UploadList.as_view(), name='upload_file'),
    path('tp_employee/upload/<int:pk>', views.UploadDetail.as_view())
]
