from rest_framework import serializers
from tp_employee.models import *
import requests

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id','emp_name', 'emp_id', 'emp_mail','designation', 'doj', 'dob']

    def create(self, validated_data):
        emp_mail = validated_data.get('emp_mail', None)
        # Replace 'YOUR_API_KEY' with your actual SendinBlue API key
        api_key = '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'
        api_url = 'https://api.sendinblue.com/v3/smtp/email'

        # Email data
        sender_email = 'techprojectspython@gmail.com'
        recipient_email = 'rastogiprakhar01@gmail.com'
        subject = 'Employee Added in HR Portal'
        content = '<p>This is a test email from TechProjects HR portal</p>'

        # Compose the request headers
        headers = {
            'Content-Type': 'application/json',
            'api-key': api_key
        }

        # Compose the email payload
        data = {
            'sender': {'email': sender_email},
            'to': [{'email': recipient_email}],
            'subject': subject,
            'htmlContent': content
        }

        # Send the email using the SendinBlue API
        response = requests.post(api_url, json=data, headers=headers)

        # Check the response
        if response.status_code == 201:
            print('Email sent successfully!')
        else:
            print('Failed to send email. Status code:', response.status_code)
            print('Response:', response.text)
        return Employee.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Employee` instance, given the validated data.
        """
        instance.emp_name = validated_data.get('emp_name', instance.emp_name)
        instance.emp_id = validated_data.get('emp_id', instance.emp_id)
        instance.emp_mail = validated_data.get('emp_mail', instance.emp_mail)
        instance.designation = validated_data.get('designation', instance.designation)
        instance.doj = validated_data.get('doj', instance.doj)
        instance.dob = validated_data.get('dob', instance.dob)
        instance.save()
        return instance
    
class UploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Upload
        fields = '__all__'

    # def create(self, validated_data):
    #     """
    #     Create and return a new `Emplyee` instance, given the validated data.
    #     """
    #     return Upload.objects.create(**validated_data)
      
    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `Employee` instance, given the validated data.
    #     """
    #     instance.emp = validated_data.get('emp', instance.emp)
    #     instance.doc = validated_data.get('doc', instance.doc)
    #     instance.save()
    #     return instance  