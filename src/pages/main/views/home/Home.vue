<template>
  <div class="home-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <Logo />
        <h1 class="hero-title">Vue 3 + Vite + Element Plus</h1>
        <p class="hero-subtitle">
          A modern, fast, and elegant web application template built with cutting-edge technologies
        </p>
        <div class="hero-stats">
          <el-space :size="20" wrap>
            <el-statistic title="Vue Version" :value="3.5" :precision="1" suffix=".26" />
            <el-statistic title="Vite Version" :value="7.3" :precision="1" suffix=".1" />
            <el-statistic title="Element Plus" :value="2.13" :precision="2" suffix=".1" />
            <el-statistic title="TypeScript" :value="5.9" :precision="1" suffix=".3" />
          </el-space>
        </div>
        <div class="hero-actions">
          <el-button type="primary" size="large" @click="scrollToFeatures">
            <el-icon><Promotion /></el-icon>
            Explore Features
          </el-button>
          <el-button size="large" @click="openGithub">
            <el-icon><Link /></el-icon>
            View on GitHub
          </el-button>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section" ref="featuresRef">
      <h2 class="section-title">Key Features</h2>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="feature in features" :key="feature.title">
          <el-card class="feature-card" shadow="hover">
            <template #header>
              <div class="feature-header">
                <el-icon :size="32" :color="feature.color">
                  <component :is="feature.icon" />
                </el-icon>
              </div>
            </template>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- Interactive Demo Section -->
    <div class="demo-section">
      <h2 class="section-title">Interactive Components</h2>
      <el-tabs v-model="activeTab" type="border-card" class="demo-tabs">
        <el-tab-pane label="Form & Input" name="form">
          <el-form :model="demoForm" label-width="120px" class="demo-form">
            <el-form-item label="Username">
              <el-input v-model="demoForm.username" placeholder="Enter username" />
            </el-form-item>
            <el-form-item label="Email">
              <el-input v-model="demoForm.email" type="email" placeholder="Enter email" />
            </el-form-item>
            <el-form-item label="Date">
              <el-date-picker v-model="demoForm.date" type="date" placeholder="Pick a date" />
            </el-form-item>
            <el-form-item label="Switch">
              <el-switch v-model="demoForm.enabled" />
            </el-form-item>
            <el-form-item label="Slider">
              <el-slider v-model="demoForm.slider" show-input />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="showFormData">Show Data</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="Data Display" name="table">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="role" label="Role" width="150" />
            <el-table-column prop="email" label="Email" />
            <el-table-column label="Status">
              <template #default="scope">
                <el-tag :type="scope.row.active ? 'success' : 'info'">
                  {{ scope.row.active ? "Active" : "Inactive" }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="Operations" width="180">
              <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.row)">Edit</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="Notifications" name="notification">
          <div class="notification-demo">
            <el-space wrap>
              <el-button type="success" @click="showNotification('success')">Success</el-button>
              <el-button type="warning" @click="showNotification('warning')">Warning</el-button>
              <el-button type="danger" @click="showNotification('error')">Error</el-button>
              <el-button type="info" @click="showNotification('info')">Info</el-button>
            </el-space>
          </div>
        </el-tab-pane>

        <el-tab-pane label="Theme" name="theme">
          <div class="theme-demo">
            <el-space wrap>
              <el-button @click="onLightThemes">
                <el-icon><Sunny /></el-icon>
                Light Theme
              </el-button>
              <el-button @click="onDarkThemes">
                <el-icon><Moon /></el-icon>
                Dark Theme
              </el-button>
            </el-space>
            <el-divider />
            <el-alert
              title="Theme Switching"
              type="info"
              description="Click the buttons above to switch between light and dark themes"
              show-icon
              :closable="false"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- Technology Stack Section -->
    <div class="tech-section">
      <h2 class="section-title">Technology Stack</h2>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="6" v-for="tech in technologies" :key="tech.name">
          <div class="tech-card">
            <div class="tech-logo">{{ tech.icon }}</div>
            <h4 class="tech-name">{{ tech.name }}</h4>
            <p class="tech-version">{{ tech.version }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElMessage, ElNotification } from "element-plus";
import { Promotion, Link, TrendCharts, DataLine, DocumentChecked, Setting, Sunny, Moon } from "@element-plus/icons-vue";

interface TableRow {
  name: string;
  role: string;
  email: string;
  active: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const featuresRef = ref<any>();
const activeTab = ref("form");

const features = [
  {
    title: "Lightning Fast",
    description: "Powered by Vite's instant server start and blazing fast HMR",
    icon: TrendCharts,
    color: "#409EFF",
  },
  {
    title: "Modern Stack",
    description: "Built with Vue 3 Composition API and TypeScript for better development experience",
    icon: DataLine,
    color: "#67C23A",
  },
  {
    title: "Rich Components",
    description: "Element Plus provides 60+ high-quality components out of the box",
    icon: DocumentChecked,
    color: "#E6A23C",
  },
  {
    title: "Highly Customizable",
    description: "Easy to customize theme, layout, and functionality to match your needs",
    icon: Setting,
    color: "#F56C6C",
  },
];

const demoForm = reactive({
  username: "",
  email: "",
  date: "",
  enabled: true,
  slider: 50,
});

const tableData = ref([
  { name: "Alice Johnson", role: "Developer", email: "alice@example.com", active: true },
  { name: "Bob Smith", role: "Designer", email: "bob@example.com", active: true },
  { name: "Charlie Brown", role: "Manager", email: "charlie@example.com", active: false },
  { name: "Diana Prince", role: "Developer", email: "diana@example.com", active: true },
]);

const technologies = [
  { name: "Vue", icon: "⚡", version: "3.5.26" },
  { name: "Vite", icon: "🚀", version: "7.3.1" },
  { name: "Element Plus", icon: "🎨", version: "2.13.1" },
  { name: "TypeScript", icon: "📘", version: "5.9.3" },
  { name: "Pinia", icon: "🍍", version: "3.0.4" },
  { name: "Vue Router", icon: "🛣️", version: "4.6.4" },
  { name: "Axios", icon: "📡", version: "1.13.2" },
  { name: "Sass", icon: "💅", version: "1.97.1" },
];

const scrollToFeatures = () => {
  featuresRef.value?.scrollIntoView({ behavior: "smooth" });
};

const openGithub = () => {
  window.open("https://github.com/liubaicai/vue3_ele_vite", "_blank");
};

const showFormData = () => {
  ElMessage.success({
    message: `Form Data: ${JSON.stringify(demoForm)}`,
    duration: 3000,
  });
};

const handleEdit = (row: TableRow) => {
  ElMessage.info(`Editing ${row.name}`);
};

const handleDelete = (row: TableRow) => {
  ElMessage.warning(`Deleting ${row.name}`);
};

const showNotification = (type: string) => {
  ElNotification({
    title: type.charAt(0).toUpperCase() + type.slice(1),
    message: `This is a ${type} notification`,
    type: type as "success" | "warning" | "error" | "info",
  });
};

const onLightThemes = () => {
  window.changeThemes("light");
  ElMessage.success("Switched to light theme");
};

const onDarkThemes = () => {
  window.changeThemes("dark");
  ElMessage.success("Switched to dark theme");
};
</script>

<style scoped lang="scss">
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-section {
  padding: 80px 20px;
  text-align: center;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin: 30px 0 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.95;
  line-height: 1.6;
}

.hero-stats {
  margin: 50px 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 16px;
  display: inline-block;

  :deep(.el-statistic__head) {
    color: rgba(255, 255, 255, 0.8);
  }

  :deep(.el-statistic__content) {
    color: white;
  }
}

.hero-actions {
  margin-top: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.features-section,
.demo-section,
.tech-section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
}

.section-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
  color: #303133;
}

.feature-card {
  margin-bottom: 20px;
  transition: transform 0.3s;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
}

.feature-header {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #303133;
  text-align: center;
}

.feature-description {
  color: #606266;
  line-height: 1.6;
  text-align: center;
}

.demo-section {
  background: #f5f7fa;
}

.demo-tabs {
  margin-top: 30px;
}

.demo-form {
  max-width: 600px;
  margin: 20px auto;
}

.notification-demo,
.theme-demo {
  padding: 40px;
  text-align: center;
}

.tech-section {
  background: #fafafa;
}

.tech-card {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 12px;
  margin-bottom: 20px;
  transition: all 0.3s;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}

.tech-logo {
  font-size: 48px;
  margin-bottom: 15px;
}

.tech-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #303133;
}

.tech-version {
  color: #909399;
  font-size: 14px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .section-title {
    font-size: 28px;
  }
}
</style>
