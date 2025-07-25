# Docker study
Repository of studies and small projects in Docker.

## Docker Images
Download an image from Docker Hub
```bash
docker pull <image>
```
List all local images
```bash
docker images
```
Remove an image
```bash
docker rmi <image>
```
Build an image from a Dockerfile
```bash
docker build -t <name>:<tag>
```
## Containers
Run an container from an image
```bash
docker run <image>
```
Run an container in detached mode (background)
```bash
docker run -d <image>
```
Run with interactive terminal
```bash
docker run -it <image> sh
```
List running containers
```bash
docker ps
```
List all conatiners (including stopped)
```bash
docker ps -a
```
Start a stopped conatiner
```bash
docker start <container>
```
Restart a conatiner
```bash
docker restart <conatiner>
```
Delete a container
```bash
docker rm <container>
```
Exexute a shell inside the running container
```bash
docker exec -it <container> sh
```
View logs from a container
```bash
docker logs <container>
```
## Docker Compose
Start all services
```bash
docker compose up
```
Start in dechated mode
```bash
docker compose up -d
```
Stop and remove containers, networks, volumes
```bash
docker compose down
```
Build an image from a docker-compose file
```bash
docker compose build
```
## Docker Volumes
List all volumes
```bash
docker volume ls
```
Remove a volume
```bash
dokcer volume rm <volume>
```
List networks
```bash
docker network ls
```
Create a network
```bash
docker network create <name>
```