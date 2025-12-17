import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import Cart from '@/components/Cart';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [selectedCompatibility, setSelectedCompatibility] = useState<string>('all');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { addToCart, totalItems } = useCart();

  const products = [
    {
      id: 1,
      name: 'LED Фары Premium',
      category: 'headlights',
      price: 12990,
      image: 'https://cdn.poehali.dev/projects/7645dc55-ece7-471e-b696-d0442f475ace/files/292d2145-c5bd-4952-8460-9383fc848cea.jpg',
      color: 'blue',
      compatibility: 'universal',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'LED Подсветка Салона',
      category: 'interior',
      price: 4990,
      image: 'https://cdn.poehali.dev/projects/7645dc55-ece7-471e-b696-d0442f475ace/files/cb5f6dc9-3f76-4220-8902-c18d5b323da0.jpg',
      color: 'multicolor',
      compatibility: 'universal',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Неоновая Подсветка Днища',
      category: 'underglow',
      price: 8990,
      image: 'https://cdn.poehali.dev/projects/7645dc55-ece7-471e-b696-d0442f475ace/files/7274c55e-4d0e-4b75-bc10-1843e09c47ed.jpg',
      color: 'purple',
      compatibility: 'sedan',
      badge: 'Топ выбор'
    },
    {
      id: 4,
      name: 'LED Фары Sport',
      category: 'headlights',
      price: 15990,
      image: 'https://cdn.poehali.dev/projects/7645dc55-ece7-471e-b696-d0442f475ace/files/292d2145-c5bd-4952-8460-9383fc848cea.jpg',
      color: 'white',
      compatibility: 'suv',
      badge: ''
    },
    {
      id: 5,
      name: 'LED Ленты RGB',
      category: 'interior',
      price: 3490,
      image: 'https://cdn.poehali.dev/projects/7645dc55-ece7-471e-b696-d0442f475ace/files/cb5f6dc9-3f76-4220-8902-c18d5b323da0.jpg',
      color: 'multicolor',
      compatibility: 'universal',
      badge: ''
    },
    {
      id: 6,
      name: 'Неоновая Подсветка Колес',
      category: 'underglow',
      price: 6990,
      image: 'https://cdn.poehali.dev/projects/7645dc55-ece7-471e-b696-d0442f475ace/files/7274c55e-4d0e-4b75-bc10-1843e09c47ed.jpg',
      color: 'orange',
      compatibility: 'universal',
      badge: ''
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const colorMatch = selectedColor === 'all' || product.color === selectedColor;
    const compatibilityMatch = selectedCompatibility === 'all' || product.compatibility === selectedCompatibility;
    return categoryMatch && colorMatch && compatibilityMatch;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-border">
                <Icon name="Zap" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold neon-glow">LEDauto</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button 
              className="neon-hover relative" 
              onClick={() => setIsCartOpen(true)}
            >
              <Icon name="ShoppingCart" size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center neon-border animate-pulse-neon">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-pulse-neon" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 neon-glow">
              Освети свой путь
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Премиальная светодиодная продукция для вашего автомобиля
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="neon-hover bg-primary text-primary-foreground">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="neon-hover border-primary text-foreground">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Каталог продукции
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Тип продукции</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="neon-hover border-primary/50">
                  <SelectValue placeholder="Все категории" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="headlights">Фары</SelectItem>
                  <SelectItem value="interior">Подсветка салона</SelectItem>
                  <SelectItem value="underglow">Подсветка днища</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Цвет свечения</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger className="neon-hover border-primary/50">
                  <SelectValue placeholder="Все цвета" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все цвета</SelectItem>
                  <SelectItem value="blue">Синий</SelectItem>
                  <SelectItem value="purple">Фиолетовый</SelectItem>
                  <SelectItem value="orange">Оранжевый</SelectItem>
                  <SelectItem value="white">Белый</SelectItem>
                  <SelectItem value="multicolor">RGB / Мультицвет</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Совместимость</label>
              <Select value={selectedCompatibility} onValueChange={setSelectedCompatibility}>
                <SelectTrigger className="neon-hover border-primary/50">
                  <SelectValue placeholder="Все автомобили" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все автомобили</SelectItem>
                  <SelectItem value="universal">Универсальные</SelectItem>
                  <SelectItem value="sedan">Седан</SelectItem>
                  <SelectItem value="suv">Внедорожник</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden neon-hover border-primary/30 bg-card">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full neon-hover bg-primary text-primary-foreground"
                    onClick={() => handleAddToCart(product)}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Доставка и оплата
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-border">
                <Icon name="Truck" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">По всей России от 1-3 дней</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-border">
                <Icon name="CreditCard" className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Удобная оплата</h3>
              <p className="text-muted-foreground">Наличные, карта, онлайн</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-border">
                <Icon name="Shield" className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">24 месяца на всю продукцию</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              О компании LEDauto
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Мы специализируемся на продаже качественной светодиодной продукции для автомобилей. 
              Более 5 лет на рынке, тысячи довольных клиентов.
            </p>
            <p className="text-lg text-muted-foreground">
              Наша миссия — сделать каждый автомобиль ярче и безопаснее с помощью современных технологий освещения.
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Контакты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Icon name="Phone" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" className="text-secondary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@ledauto.ru</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" className="text-accent mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Автомобильная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 LEDauto. Все права защищены.</p>
        </div>
      </footer>

      <Cart open={isCartOpen} onOpenChange={setIsCartOpen} />
    </div>
  );
};

export default Index;