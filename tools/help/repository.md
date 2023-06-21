1. Add VM_USER_NAME action variable
   ![img.png](img.png)

Add secrets:
![img_11.png](img_11.png)

###

Setup google cloud as described here https://github.com/google-github-actions/ssh-compute

3. Add GCP_CREDENTIALS
   ![img_1.png](img_1.png)
   Account should be setup as described above and attached to deploy virtual mashines
   ![img_5.png](img_5.png)
   ![img_4.png](img_4.png)
   ![img_6.png](img_6.png)
   ![img_8.png](img_8.png)
   insert JSON key content to GCP_CREDENTIALS
4. Create metadata private key as described here https://cloud.google.com/compute/docs/connect/create-ssh-keys
   and add to GCP_SSH_PRIVATE_KEY
5. Add SSL sertificates
