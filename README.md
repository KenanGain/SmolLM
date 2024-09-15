Here’s the updated README with the additional features:

---

# LLM Models with Ollama: Run SmolLM, LLaMA, TinyLLama, Qwen, and More

## Introduction

Welcome to the **LLM Models** repository! This project demonstrates how to run various **Large Language Models (LLMs)** locally using Ollama, integrated with a **Next.js** app for an easy-to-use interface. The app supports multiple LLMs and includes advanced features like **Vercel AI SDK**, **streaming text**, **Next.js themes**, and **shadcn UI components**.

The models you can run include, but are not limited to:
- **SmolLM Series**: 135M, 360M, 1.7B parameters
- **TinyLLaMA**: Latest and 1.1B versions
- **LLaVA-LLaMA3**: 8B parameters
- **Qwen Series**: 0.5B, 1.5B, 7B parameters
- **Mistral-Nemo**: Latest
- **CodeGemma**: Latest and other variations
- **Aya, Mixtral, and more**

### Full Model List:
You can explore a wide variety of models, such as:
```
tinyllama:1.1b, llava-llama3:8b, qwen:0.5b, qwen2:7b, smollm:1.7b, llama3.1, gemma2, mixtral, mistral-nemo, and more.
```

## Features

- **Local LLM Inference**: Run various LLMs locally using **Ollama** for efficient inference.
- **Vercel AI SDK**: Integrated for advanced AI features and optimization.
- **Streaming Text**: Real-time streaming text output for dynamic interactions.
- **Next.js Themes**: Dark/light mode toggle using **Next Themes**.
- **shadcn UI Components**: Beautiful, customizable UI components for an enhanced user experience.
- **Multiple Models**: Choose from small, medium, and large models based on your hardware and requirements.

## Getting Started

### Prerequisites

To run this project, you need the following tools installed:

- **Node.js** (v14+)
- **Ollama**
- **Next.js**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KenanGain/SmolLM.git
   cd SmolLM
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to interact with the models.

### Model Download

You can download any of the supported models locally via Ollama:

```bash
ollama pull tinyllama:latest
ollama pull qwen2:7b
ollama pull smollm:135M
```

Adjust the model name based on your specific needs.

## Project Structure

```bash
├── public          # Static assets
├── src             # Source files
│   ├── components  # UI Components
│   ├── pages       # Next.js pages
│   └── utils       # Utility functions for model inference
├── package.json    # Dependencies and scripts
└── README.md       # Project documentation
```


## Usage

To run a specific model, simply select the model from the dropdown menu in the app and enter a prompt. The app will display the model's output after processing. The **streaming text** feature provides real-time output, improving user interaction.

## Benchmarks

The supported LLM models provide flexibility in balancing computational resource use and performance:

- **TinyLLaMA**: Lightweight tasks with minimal resource usage.
- **SmolLM Series**: Efficient for reasoning and common sense tasks.
- **LLaVA-LLaMA3**: Best for complex tasks with a larger memory footprint.

## Technologies Used

- **Next.js**: For building the front-end app.
- **Ollama**: For running the LLM models locally.
- **Vercel AI SDK**: To integrate advanced AI functionality.
- **Streaming Text**: For real-time, dynamic text output.
- **Next Themes**: For dark/light mode support.
- **shadcn UI**: For beautiful and responsive UI components.
- **JavaScript/TypeScript**: For scripting and model integration.
- **Tailwind CSS**: For styling the app interface.

## Contributing

Contributions are welcome! Feel free to fork this repository, submit issues, or create pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, you can reach me at [kenangain2910@gmail.com](mailto:kenangain2910@gmail.com).

---

Let me know if you'd like to add or modify anything!
