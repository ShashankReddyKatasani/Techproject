from django.db import models

class Employee(models.Model):
    emp_name = models.CharField(max_length = 100)
    emp_id = models.IntegerField(default = 0)
    emp_mail = models.EmailField(null=True)
    designation = models.CharField(max_length = 255)
    doj = models.DateField(max_length=50)
    dob = models.DateField(max_length=50)

    def __str__(self):
        return str(self.emp_name)
   

class Upload(models.Model):
    emp = models.ForeignKey(Employee, on_delete=models.CASCADE)
    doc = models.FileField(upload_to='storage/',default='none')

    def __str__(self):
        return str(self.emp.emp_name)
