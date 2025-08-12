# S7 Travels - Tour and Travel Agency Website

A modern tour and travel agency website built with Next.js, featuring beautiful UI components and integration with DatoCMS for content management.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🚀 Built with Next.js 15
- 🎯 SEO optimized
- 📊 DatoCMS integration for content management
- 📧 EmailJS integration for contact forms
- 🎨 Tailwind CSS for styling
- 🔧 Docker support for easy deployment

## Prerequisites

- Node.js 20 or higher
- Docker and Docker Compose (for containerized deployment)
- DatoCMS account and API token
- EmailJS account and service ID

## Environment Setup

1. Copy the environment example file:
   ```bash
   cp env.example .env.local
   ```

2. Fill in your environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_DATOCMS_API_TOKEN=your_actual_datocms_token
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_emailjs_service_id
   NEXT_PUBLIC_ENVIRONMENT=production
   ```

## Quick Start

### Using Docker (Recommended)

1. **Build the Docker image:**
   ```bash
   ./build.sh
   ```

2. **Run the application:**
   ```bash
   docker run -p 3000:3000 s7ct-new-app-image:latest
   ```

3. **Or use Docker Compose:**
   ```bash
   docker-compose up -d
   ```

### Development with Docker

1. **Development deployment:**
   ```bash
   ./deploy.sh
   ```

2. **Production deployment:**
   ```bash
   ./deploy-production.sh
   ```

### Without Docker

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Docker Configuration

### Development
- Uses `docker-compose.yml`
- Runs on port 3000
- Includes hot reloading
- Uses development environment variables

### Production
- Uses `docker-compose.prod.yml`
- Runs on port 80
- Optimized for production
- Uses production environment variables

## Project Structure

```
s7ct-new/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── components/      # React components
│   │   ├── data/           # Static data
│   │   ├── assets/         # Styles and assets
│   │   └── tours/          # Tour pages
│   └── lib/                # Utility libraries
├── public/                 # Static assets
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Development Docker setup
├── docker-compose.prod.yml # Production Docker setup
├── build.sh               # Simple build script
├── deploy.sh              # Development deployment script
├── deploy-production.sh    # Production deployment script
└── env.example            # Environment variables template
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `./build.sh` - Build Docker image with environment variables
- `./deploy.sh` - Deploy to development
- `./deploy-production.sh` - Deploy to production

## Deployment

### Quick Docker Build

```bash
# Build with environment variables from .env.local
./build.sh

# Run the container
docker run -p 3000:3000 s7ct-new-app-image:latest
```

### Docker Compose Deployment

1. **Development:**
   ```bash
   docker-compose up --build
   ```

2. **Production:**
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

### Manual Docker Build

```bash
docker build \
  --build-arg NEXT_PUBLIC_DATOCMS_API_TOKEN=your_token \
  --build-arg NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id \
  --build-arg NEXT_PUBLIC_ENVIRONMENT=production \
  -t s7ct-new-app-image:latest .
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_DATOCMS_API_TOKEN` | DatoCMS API token for content fetching | Yes |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID for contact forms | Yes |
| `NEXT_PUBLIC_ENVIRONMENT` | Environment (development/production) | No (default: production) |

## Troubleshooting

### Docker Build Issues

1. **Environment variables not found:**
   - Ensure `.env.local` file exists with proper values
   - Use the `./build.sh` script which automatically loads environment variables

2. **Build fails with missing dependencies:**
   - Clear Docker cache: `docker system prune -a`
   - Rebuild without cache: `docker build --no-cache -t s7ct-new-app-image:latest .`

### Runtime Issues

1. **Container won't start:**
   - Check logs: `docker logs container_name`
   - Ensure environment variables are set correctly

2. **API calls failing:**
   - Verify DatoCMS API token is correct
   - Check network connectivity

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Docker
5. Submit a pull request

## License

This project is licensed under the MIT License.
